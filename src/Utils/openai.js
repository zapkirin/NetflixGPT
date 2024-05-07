import OpenAI from 'openai';
import { GPT_APIKEY } from './links';

const openai = new OpenAI({
  apiKey: GPT_APIKEY,
  dangerouslyAllowBrowser:true // This is the default and can be omitted
});

export default openai