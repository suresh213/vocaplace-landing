import { GoogleGenAI, Type } from "@google/genai";

// Safe access to API Key
const getApiKey = () => {
  try {
    // @ts-ignore
    return (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';
  } catch (e) {
    return '';
  }
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

export const generateKeywordIdeas = async (niche: string): Promise<any[]> => {
  if (!apiKey) {
    console.warn("No API Key provided");
    // Return mock data if no key to prevent app crash in preview mode without env vars
    return [
      { keyword: `${niche} strategy`, difficulty: "Medium", volume: "1200" },
      { keyword: `best ${niche} tools`, difficulty: "Low", volume: "850" },
      { keyword: `${niche} for beginners`, difficulty: "Low", volume: "2400" },
    ];
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `Generate 5 SEO keyword ideas for the niche: "${niche}". 
    Return a JSON array where each object has "keyword" (string), "difficulty" (Low/Medium/High), and "volume" (estimated monthly search volume as a string like '1.2k').`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              keyword: { type: Type.STRING },
              difficulty: { type: Type.STRING },
              volume: { type: Type.STRING }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return safe fallback instead of throwing to keep UI alive
    return [
       { keyword: `${niche} analysis`, difficulty: "N/A", volume: "N/A" }
    ];
  }
};

export const analyzeCompetitor = async (url: string): Promise<string> => {
   if (!apiKey) return "Please configure your API Key to use the live analysis feature.";

   try {
    const model = 'gemini-3-flash-preview';
    const prompt = `Analyze this competitor URL (hypothetically, based on the domain name if you can't access it, or give general advice for this type of site): ${url}. 
    Provide a 2-sentence summary of 3 potential SEO weaknesses they might have. Keep it professional and concise.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Could not generate analysis.";
   } catch (error) {
     console.error(error);
     return "Error analyzing competitor. Please try again.";
   }
}