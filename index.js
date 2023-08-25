import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {   message : "Please type in your URL: ", 
        name: "URL" }
  ])
  .then((answers) => {
    const myUrl = answers.URL;
    
    const qr_svg = qr.image(myUrl);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', myUrl, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });