// const GptSearchCredit=async()=>{
//     //Too broke to use chatgpt api key. anyway writting the code if things fall in place in future
//         const gptQuery="Act as a movie recommendation manager. Recommend me 5"+ searchValue.current.value +"titles only. No greeting like:[Sure, here are five classic Indian retro movies you might enjoy:],comma sepearted like the given example. example: Andaaz apna apna,Padosan,Hera Pheri,Chup chup ke,Golmaal"

//         const gptResults = await openai.chat.completions.create({
//             messages: [{ role: 'user', content: gptQuery }],
//             model: 'gpt-3.5-turbo',
//           });

//           if(!gptResults) return <h1>Wait</h1>

//           const movieTitles=gptResults?.choices?.[0]?.message?.content.split(",")

//           const promiseArray=movieTitles.map((x)=>{return tmdbResult(x)})

//         const tmdbResults=await Promise.all(promiseArray)

// }
// export default GptSearchCredit