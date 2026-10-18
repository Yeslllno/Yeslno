(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: 内容配比建议 ---
  var chartMix = echarts.init(document.getElementById('chart-mix'), null, { renderer: 'svg' });
  chartMix.setOption({
    animation: false,
    tooltip: {
      appendToBody: true,
      trigger: 'item',
      formatter: '{b}: {c}% ({d}%)'
    },
    legend: {
      bottom: 0,
      left: 'center',
      textStyle: { color: ink, fontSize: 13 },
      itemWidth: 14,
      itemHeight: 14
    },
    color: [accent, accent2, muted],
    series: [
      {
        name: '内容配比',
        type: 'pie',
        radius: ['42%', '70%'],
        center: ['50%', '45%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 3
        },
        label: {
          show: true,
          formatter: '{b}\n{c}%',
          color: ink,
          fontSize: 13,
          lineHeight: 18
        },
        labelLine: { show: true },
        data: [
          { value: 50, name: '变身对比线' },
          { value: 30, name: '避坑答疑线' },
          { value: 20, name: '报价拆解线' }
        ]
      }
    ]
  });
  window.addEventListener('resize', function() { chartMix.resize(); });
})();
