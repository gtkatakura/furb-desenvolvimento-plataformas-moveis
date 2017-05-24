const { signUp, signIn } = require('./index');

const main = async () => {
  try {
    const url = 'http://localhost:3000';

    const { coordinatorsRepository } = await signIn(url, {
      email: 'gt.katakura4@gmail.com',
      password: '12345678'
    });

    const coordinator = await coordinatorsRepository.save({ user_id: 1 });
    const coordinators = await coordinatorsRepository.all();

    await coordinatorsRepository.destroy(coordinator);

    console.log(coordinator);
    console.log(coordinators);
  } catch (err) {
    console.log(err);
  }
};

main();
