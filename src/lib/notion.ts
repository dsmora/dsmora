import type { Experience, Skill, SiteConfig, SocialLink } from '@/types';

type NotionSort = {
  property: string;
  direction: 'ascending' | 'descending';
};

type NotionQueryBody = {
  sorts?: ReadonlyArray<NotionSort>;
};

type NotionPage = {
  id: string;
  properties: Record<string, unknown>;
};

type NotionResponse = {
  results: ReadonlyArray<NotionPage>;
};

async function queryDatabase(databaseId: string, sorts?: ReadonlyArray<NotionSort>): Promise<NotionResponse> {
  const body: NotionQueryBody = {};
  
  if (sorts) {
    body.sorts = sorts;
  }

  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Notion API error: ${error.message}`);
  }

  return response.json();
}

export const getExperiences = async (): Promise<ReadonlyArray<Experience>> => {
  const response = await queryDatabase(
    process.env.NOTION_DATABASE_ID_EXPERIENCES!,
    [{ property: 'StartDate', direction: 'descending' }]
  );

  const results = response.results.filter((page): page is NotionPage => 
    'properties' in page
  );

  return results.map((page) => {
    const props = page.properties as Record<string, { title?: Array<{ plain_text: string }>, rich_text?: Array<{ plain_text: string }>, date?: { start: string }, multi_select?: Array<{ name: string }>, checkbox?: boolean }>;
    return {
      id: page.id,
      company: props.Company?.title?.[0]?.plain_text ?? '',
      role: props.Role?.rich_text?.[0]?.plain_text ?? '',
      startDate: props.StartDate?.date?.start ?? '',
      endDate: props.EndDate?.date?.start ?? undefined,
      description: props.Description?.rich_text?.[0]?.plain_text ?? '',
      technologies: props.Technologies?.multi_select?.map((t) => t.name) ?? [],
      highlighted: props.Highlighted?.checkbox ?? false,
    };
  });
};

export const getSkills = async (): Promise<ReadonlyArray<Skill>> => {
  const response = await queryDatabase(process.env.NOTION_DATABASE_ID_SKILLS!);

  const results = response.results.filter((page): page is NotionPage => 
    'properties' in page
  );

  return results.map((page) => {
    const props = page.properties as Record<string, { title?: Array<{ plain_text: string }>, select?: { name: string } }>;
    return {
      name: props.Name?.title?.[0]?.plain_text ?? '',
      level: (props.Level?.select?.name ?? 'beginner') as Skill['level'],
      category: (props.Category?.select?.name ?? 'tools') as Skill['category'],
    };
  });
};

export const getSocialLinks = async (): Promise<ReadonlyArray<SocialLink>> => {
  const response = await queryDatabase(process.env.NOTION_DATABASE_ID_SOCIALS!);

  const results = response.results.filter((page): page is NotionPage => 
    'properties' in page
  );

  return results.map((page) => {
    const props = page.properties as Record<string, { title?: Array<{ plain_text: string }>, url?: string, rich_text?: Array<{ plain_text: string }> }>;
    return {
      name: props.Name?.title?.[0]?.plain_text ?? '',
      url: props.URL?.url ?? '',
      icon: props.Icon?.rich_text?.[0]?.plain_text ?? '',
    };
  });
};

export const getSiteConfig = async (): Promise<SiteConfig> => {
  const [profileResponse, socialLinks] = await Promise.all([
    queryDatabase(process.env.NOTION_DATABASE_ID_PROFILE!),
    getSocialLinks(),
  ]);

  const profilePage = profileResponse.results[0];

  if (!profilePage || !('properties' in profilePage)) {
    throw new Error('Profile not found in Notion');
  }

  const props = profilePage.properties as Record<string, { title?: Array<{ plain_text: string }>, rich_text?: Array<{ plain_text: string }>, email?: string }>;

  return {
    name: props.Name?.title?.[0]?.plain_text ?? '',
    title: props.JobTitle?.rich_text?.[0]?.plain_text ?? '',
    description: props.Description?.rich_text?.[0]?.plain_text ?? '',
    email: props.Email?.email ?? '',
    socialLinks: socialLinks,
  };
};
