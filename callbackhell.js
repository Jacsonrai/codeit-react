// Callback hell, also known as "Pyramid of Doom" or "Callback spaghetti"
asyncFunction1(function (result1) {
    // Inside the callback of asyncFunction1
    asyncFunction2(result1, function (result2) {
      // Inside the callback of asyncFunction2
      asyncFunction3(result2, function (result3) {
        // Inside the callback of asyncFunction3
        asyncFunction4(result3, function (result4) {
          // Inside the callback of asyncFunction4
          // ... and so on
        });
      });
    });
  });
  0
  