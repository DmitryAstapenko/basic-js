const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainMap = new Map();
  const allDomains = domains
    .map((domain) =>
      domain
        .split(".")
        .reverse()
        .map((_, index, array) => {
          let resultDomain = "";
          for (let i = 0; i < index + 1; i++) {
            resultDomain = resultDomain.concat(".", `${array[i]}`);
          }
          return resultDomain;
        })
    )
    .flat();

  allDomains.forEach((domain) => {
    if (domainMap.has(domain)) {
      domainMap.set(domain, domainMap.get(domain) + 1);
    } else {
      domainMap.set(domain, 1);
    }
  });

  return Object.fromEntries(domainMap);
}

module.exports = {
  getDNSStats,
};
