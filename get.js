
const UUID = '2350a3fd-2f9b-4ab6-961e-1e9a6dc94e74';

function quantile(arr, q) {
  const sorted = arr.sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;

  if (sorted[base + 1] !== undefined) {
    return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
  } else {
    return Math.floor(sorted[base]);
  }
};

function prepareData(result) {
  return result.data.map(item => {
    item.date = item.timestamp.split('T')[0];

    return item;
  });
}

// показать значение метрики за несколько день
function showMetricByPeriod(data, dateStart, dateFinish) {

  let DateTimeStart = luxon.DateTime.fromISO(dateStart);
  let DateTimeFinish = luxon.DateTime.fromISO(dateFinish);

  let sampleData = data
    .filter((item) => {

       return DateTimeStart.toJSDate() < item.date && item.date < DateTimeFinish.toJSDate()
    })
    .map(item => item.value);

  console.log(`${date} ${name}: ` +
    `p25=${quantile(sampleData, 0.25)} p50=${quantile(sampleData, 0.5)} ` +
    `p75=${quantile(sampleData, 0.75)} p90=${quantile(sampleData, 0.95)} ` +
    `hits=${sampleData.length}`);
}

// показать сессию пользователя
function showSession(data, sessionId) {
  let sampleData = data
    .filter(item => item.reqid === sessionId)
    .map(item => item.value);

  console.log('showSession', sampleData)
}

// сравнить метрику в разных срезах
function compareMetric(firstArg, secondArg) {

}

// рассчитать метрику за выбранный день
function calcMetricByDate(data, page, name, date) {
  let sampleData = data
    .filter(item => item.page == page && item.name == name && item.date == date)
    .map(item => item.value);

  console.log(`${date} ${name}: ` +
    `p25=${quantile(sampleData, 0.25)} p50=${quantile(sampleData, 0.5)} ` +
    `p75=${quantile(sampleData, 0.75)} p90=${quantile(sampleData, 0.95)} ` +
    `hits=${sampleData.length}`);
}

fetch(`https://shri.yandex/hw/stat/data?counterId=${UUID}`)
  .then(res => res.json())
  .then(result => {
    let data = prepareData(result);

    calcMetricByDate(data, 'send test', 'connect', '2021-07-08');
    calcMetricByDate(data, 'send test', 'ttfb', '2021-07-08');
    calcMetricByDate(data, 'send test', 'speed', '2021-07-08');
    calcMetricByDate(data, 'send test', 'diagonal', '2021-07-08');
    calcMetricByDate(data, 'send test', 'isLandScape', '2021-07-08');
    calcMetricByDate(data, 'send test', 'pixelRatio', '2021-07-08');
    // добавить свои сценарии, реализовать функции выше
    // ...
  });
