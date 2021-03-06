const console = require("../");
const { pipe, chain } = require("ramda");

// showInfo :: String -> IO ()
const showMonadSpec = pipe(
  console.log,
  chain(() => console.group()),
  chain(() => console.log("Functor")),
  chain(() => console.group()),
  chain(() => console.log("Apply")),
  chain(() => console.group()),
  chain(() => console.log("Applicative")),
  chain(() => console.group()),
  chain(() => console.log("Monad")),
  chain(() => console.groupEnd()),
  chain(() => console.groupEnd()),
  chain(() => console.groupEnd()),
  chain(() => console.groupEnd())
);

// monadSpec :: IO ()
const monadSpec = showMonadSpec("Fantasy Land:"); // IO ()

monadSpec.run(); // Show in console:
/*
Fantasy Land:
  Functor
    Apply
      Applicative
        Monad
*/
