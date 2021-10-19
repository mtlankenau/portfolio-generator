const profileDataArgs = process.argv.splice(2, process.argv.length);

const printProfileData = profileDataArr => {
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);