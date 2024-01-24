const Sentry = require("@sentry/node");

Sentry.init({
  dsn: 'https://b070dad593840b171d307dbb38de729f@o4505365730885632.ingest.sentry.io/4506305809088512',
  // Performance Monitoring
  tracesSampleRate: 1.0,
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

const wowee = () => {
  // Aenean 
  // luctus magna nec tempus bibendum. Etiam 
  // molestie, neque at efficitur placerat, nibh 
  // orci tincidunt mi, fermentum blandit ligula 
  // mi luctus tellus. Nullam venenatis diam 
  // ultricies, euismod ex sed, suscipit turpis. 
  // Vivamus porta augue magna, at consequat leo 
  // molestie at. In non sollicitudin massa, in 
  // tincidunt ipsum. Aliquam erat volutpat. 
  // Mauris tortor sem, lacinia nec viverra eget, 
  // sollicitudin sit amet diam. Pellentesque a 
  // nulla a ante blandit sagittis. 
  console.log("in here");
  const i = 0
  const j = 1
  return hello();
}

function wave() {
  const d = 5;
  const c = 3.14 * d;
  console.log(d)
  console.log(c)
  console.log("hello server")
  // this raises an error
  return "hello there";
}

const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });
  
  setTimeout(() => {
    try {
      const rand = Math.floor(Math.random() * 2);
      if (rand == 0) {
        wowee();
      } else {
        wave();
      }
    } catch (e) {
      Sentry.captureException(e);
      console.log(e);
    } finally {
      transaction.finish();
    }
  }, 99);