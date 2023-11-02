// Async y Await
// Es una forma de "transformar" código asincrónico en sincrónico.

async function print1(number) {
  return new Promise((resolve, reject) => resolve(number)).then((resolve) =>
    console.log(resolve)
  );
}

async function printMyAsync() {
  await print1("one");
  await print1("two");
  await print1("three");
}

printMyAsync();
