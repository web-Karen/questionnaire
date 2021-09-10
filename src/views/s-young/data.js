export const data = [
  // { name: '', address: '', tel: '' }
  { id: '1', name: 'Doug', address: 'Ernser Mountain', tel: '(813) 465-5396 x19470' },
  { id: '2', name: 'Saul', address: 'Quitzon Dam', tel: '228-906-7573 x5842' },
  { id: '3', name: 'Jacey', address: 'Jast Villages', tel: '800.595.1397' },
  { id: '4', name: 'Fay', address: 'Johnston Fork', tel: '(221) 906-1582' },
  { id: '5', name: 'Georgianna', address: 'Roxane Hollow', tel: '1-833-585-8124' },
  { id: '6', name: 'Bart', address: 'Murray Fields', tel: '1-435-230-3481 x15682' },
  { id: '7', name: 'Manuel', address: 'Norval Plains', tel: '813.563.7493 x617' }
]

export const lineOption = {
  title: {
    text: '',
    subtext: '纯属虚构'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['最高气温', '最低气温']
  },
  toolbox: {
    show: false,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: '最高气温',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: '平均值' }
        ]
      }
    },
    {
      name: '最低气温',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [
          { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: '平均值' },
          [{
            symbol: 'none',
            x: '90%',
            yAxis: 'max'
          }, {
            symbol: 'circle',
            label: {
              position: 'start',
              formatter: '最大值'
            },
            type: 'max',
            name: '最高点'
          }]
        ]
      }
    }
  ]
}
export const lineSubOption = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    areaStyle: {}
  }]
}
export const pieOption = {
  title: {
    text: '访问来源',
    subtext: '纯属虚构',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
