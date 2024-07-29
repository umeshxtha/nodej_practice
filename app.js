const { flatMap } = require("lodash")

const { readFile,writeFile } = require("fs").promises
// const { result } = require("lodash");


// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };


// try catch block ma halam haii
const start = async () => {
    try{
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile(
          './content/result-mind-grenade.txt', `This is Awesome : ${first} ${second}`,{flag:'a'}
        )
    console.log(first,second)
    }
    catch(err){
        console.log(err)
    }
}
// invoke function
start()






// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=>console.log(err))


// path bata first file .txt lai show gareko 
// code cleaner banaau na  ko lagi banako ho haii

