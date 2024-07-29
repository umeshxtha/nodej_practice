const { readFile } = require("fs");
const { result } = require("lodash");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


// try catch block ma halam haii
const start = async () => {
    try{
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
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

