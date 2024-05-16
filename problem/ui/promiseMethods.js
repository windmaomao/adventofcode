Promise.myRace = function (promises) {
  let done = false;
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      p.then((res) => {
        if (!done) {
          resolve(res);
          done = true;
        }
      }).catch((e) => {
        if (!done) {
          reject(e);
          done = true;
        }
      });
    });
  });
};

Promise.myAny = function (promises) {
  const errors = new Array(promises.length).fill(false);

  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then(resolve).catch((e) => {
        errors[i] = true;
        if (errors.every((v) => v)) {
          reject("all promises rejected");
        }
      });
    });
  });
};

Promise.myAll = function (promises) {
  const resolves = new Array(promises.length).fill(undefined);

  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((res) => {
        resolves[i] = res;
        if (resolves.every((v) => v !== undefined)) {
          resolve(resolves);
        }
      }).catch((e) => reject(e));
    });
  });
};

Promise.myAllSettled = function (promises) {
  const statuses = new Array(promises.length).fill({});

  return new Promise((resolve, reject) => {
    function settle() {
      if (statuses.every((o) => o.status !== undefined)) {
        resolve(statuses);
      }
    }

    promises.forEach((p, i) => {
      p.then((res) => {
        statuses[i] = {
          status: "fulfilled",
          value: res,
        };
        settle();
      }).catch((e) => {
        statuses[i] = {
          status: "rejected",
          error: e,
        };
        settle();
      });
    });
  });
};
