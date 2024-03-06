"use client"

import { useChat ,Message} from "ai/react"

function ChatComponents() {
    const{input,handleInputChange,handleSubmit,isLoading,messages} = useChat()
  return (
    <div>

        {
            messages.map((message:Message)=>(
                <div key={message.id}>
                    {
                        message.role === "assistant" ? (
                            <h3 className="text-lg font-semibold mt-2">gpt-4</h3>
                        ) :(
                            <h3 className="text-lg font-semibold mt-2">you</h3>
                        )
                    }
                    {
                        message.content.split("\n").map((currentText,index)=>(
                            <div key={`currenttext-${index}`}>
                          {
                                  currentText === "" ?(
                                    <p>&nbsp;</p>
                                   ):(
                                    <p>{currentText}</p>
                                   )
                          }
                            </div>
                           
                        ))
                    }

                </div>
            ))
        }


        <form className="mt-12" onSubmit={handleSubmit}>
            <textarea 
                className="mt-12 w-full bg-slate-600 p-2"
                placeholder="enter your message"
                value={input}
                onChange={handleInputChange}

                />
            <button className="rounded-md bg-blue-500 p-3" disabled={isLoading}>send </button>

        </form>
    </div>
  )
}

export default ChatComponents