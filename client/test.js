const { signUp } = require('./index');

const main = async () => {
  try {
    const url = 'http://localhost:3000';

    const { coordinatorsRepository } = await signUp(url, {
      email: `gt.katakura${Date.now()}@gmail.com`,
      password: '12345678',
      password_confirmation: '12345678'
    });

    const coordinator = await coordinatorsRepository.save({ user_id: 1 });

    setTimeout(async () => {
      let coordinator2 = await coordinatorsRepository.save({ user_id: 1 });
      console.log(coordinator2);
      coordinator2 = await coordinatorsRepository.save(Object.assign(coordinator2, { user_id: 2 }));
      console.log(coordinator2);
    }, 4000);

    console.log(coordinator);
  } catch (err) {
    console.log(err);
  }
};

main();
