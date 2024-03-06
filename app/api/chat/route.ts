import { OpenAIStream, StreamingTextResponse } from "ai"
import { Configuration, OpenAIApi } from "openai-edge"

export const runtime = "edge"

const config = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)
export async function POST(request:Request){
    const {messages} = await request.json()
    const response = await openai.createChatCompletion({
        model:'gpt-4',
        stream:true,
        messages:[
            {role:"system",content:"full functionality"}
            ,...messages]
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)

}