const API_BASE_URL= 'https://gateway.marvel.com/v1/public';

export const fetchComics = async (page: number, filters: number[] = [], searchQuery: string = ''): Promise<{data: any}> => fetch(`${API_BASE_URL}/comics?apikey=${process.env.API_KEY}${filters.length? `&characters=${filters.join(',')}` : ''}
${searchQuery? `&title=${searchQuery}` : ''}
&limit=20&offset=${(page - 1) * 20}`).then(data => data.json());

export const fetchCharacters = (page: number): Promise<any> => fetch(`${API_BASE_URL}/characters?apikey=${process.env.API_KEY}&limit=10&offset=${(page - 1) * 10}`).then(data => data.json());
