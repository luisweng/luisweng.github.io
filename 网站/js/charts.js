// 第一个图表的js-------------
var myChart = echarts.init(document.getElementById('myBarChart'));

// 指定图表的配置项和数据

var   yearData =[ 68826 ,  73125 ,  77198 ,  82851 ,  90359, 98899 ];
var   difference =[50.3,53.2,55.8,59.6,64.5,70.4]; 
option = {
    tooltip: {
      trigger: 'item',
      triggerOn:"mousemove",
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
          
        }
      }
      
    },
    title:  {
        text:   '2015-2020年中国网民规模及互联网普及率' ,
        subtext: "数据来源：国家统计局",
        left: '30%',
                   
      },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: [ '网民规模（万人)', '普及率（%）'],
      x:"left",
      y:' bottom',
    },
    xAxis: [
      {
        type: 'category',
        data: ['2015年12月', '2016年12月', '2017年12月', '2018年12月', '2020年3月', '2020年12月'],
        
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '网民规模（万人)',
        min: 0,
        max: 120000,
        interval: 20000,
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        name: '普及率（%）',
        min: 40,
        max: 100,
        interval: 10,
        axisLabel: {
          formatter: '{value} '
        }
      }
    ],
    series: [
     
      {
        name: '网民规模（万人)',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        data: [ 68826 ,  73125 ,  77198 ,  82851 ,  90359, 98899 ]
      },
      {
        name: '普及率（%）',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        data: [50.3,53.2,55.8,59.6,64.5,70.4]
      }
    ]
  };
    myChart.setOption(option);


myChart.setOption( option )

// 第二个图表------------------------------------------------------------------------------------


var myChart11 = echarts.init(document.getElementById('myBarChart1'));

 var option = {
    legend: {
      top: 'bottom'
    },
    tooltip: {
        trigger: 'item',
        triggerOn:"mousemove",
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
            
          }
        }
        
      },
      title: [ {
          text:   '2021年国家反垄断局行政处罚案件行业分布（%）' },
          {subtext:'数据来源：《中国反垄断执法年度报告(2021)》',
        top:'7%'}],
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        
        type: 'pie',
        radius: [20, 50],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 4
        },
        data: [
          { value: 75.42, name: '互联网' },
          { value: 11.86, name: '其他' },
          { value: 4.24, name: '公共事业' },
          { value: 4.24, name: '交通运输' },
          { value: 4.24, name: '建筑建材' },
         
        ]
      }
    ]
  };



myChart.on('updateAxisPointer', function (event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        myChart.setOption({
            series: {
                id: 'pie',
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                    value: dimension,
                    tooltip: dimension
                }
            }
        });
    }
});
myChart11.setOption(option);



//第三个图表-----------------------------------
var myChart22 = echarts.init(document.getElementById('myBarChart2'));

var option = {
    calculable: true,
    tooltip: {
        trigger: 'item',
        triggerOn:"mousemove",
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
            
          }
        }
        
      },
      title: [ {
        text:   '21&22大厂股价跌幅裁员比（部分）',
        top:'5%',
        left:'0',
        padding: [0,100,100,100], 
        fontSize:'10'
      },{subtext:'数据来源：网络资料整理&东方财富',
    top:'8%',
  left:'20%'}
    ],
    
    legend: {
        //   指示框名字  注意！要和下方series中的name一起改
        data: ['裁员比', '股价跌幅比'],
        // 指示框位置  距离上下左右多少
        right: '2%',
        // top: '50%',
        textStyle: {
            color: '#4F4F4F'   //字体颜色
        }
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
              onZero: false
          },
           
            data: ['京东', '阿里', '美团', '知乎', '腾讯'],
            axisLine: {   //x轴线的颜色以及宽度
                show: true,   //是否显示X轴
                lineStyle: {
                    color: "#4F4F4F",
                }
            },
            axisLabel: {
                // interval: 0,  //间隔几条显示
                // rotate: 20,  // 切斜度数
                // fontSize: 10,   //字体大小
            },
            axisTick: {
                //是否显示刻度线
                show: false
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            inverse: true,
            axisTick: {
                //y轴刻度线
                show: false
            },
            axisLine: {
                show: false, // Y轴
                lineStyle: {
                    color: "#4F4F4F",
                }
            },
            min: 0,
        max: 100,
        interval: 10,
            splitLine: { // 表格里面Y轴线条
                show: true,
                lineStyle: {
                    type: 'dashed',    //虚线
                    color: '#04072F'    //虚线颜色
                }
            }
        }
    ],
    // 整体大小
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
    series: [
        {
            barWidth: 12,//柱子宽度
            name: '裁员比',
            type: 'bar',
            data: [
                17, 19,15, 22, 13
            ],
            itemStyle: {
                //颜色样式部分
                normal: {
                    barBorderRadius: [20, 20, 0, 0],  //圆角[上左，上右，下右，下左] 
                    label: {
                        show: false, //开启数字显示         
                        position: 'top', //在上方显示数字         
                        textStyle: { //数值样式          
                            color: '#474646',  //字体颜色
                            fontSize: 10       //字体大小
                        }
                    },
                    //   柱状图颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        { offset: 0, color: "#00FF00" },
                        { offset: 1, color: "#00FF00" },
                    ]),
                }
            }

        },
        {
            barWidth: 12,//柱子宽度
            name: '股价跌幅比',
            type: 'bar',
            data: [
                61.5, 79.6, 70.5, 90.3, 71
            ],
            itemStyle: {
                //颜色样式部分
                normal: {
                    barBorderRadius: [20, 20, 0, 0],  //圆角[上左，上右，下右，下左] 
                    label: {
                        show: false, //开启数字显示         
                        position: 'top', //在上方显示数字          
                        textStyle: { //数值样式          
                            color: '#474646',   //字体颜色
                            fontSize: 10        //字体大小
                        }
                    },
                    //   柱状图颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        { offset: 0, color: "#017CE4" },
                        { offset: 1, color: "#249EFD" },
                    ]),
                }
            }
        }
    ]
};

myChart22.setOption(option);

// 第四个图表
var myChart33 = echarts.init(document.getElementById('myBarChart3'));

var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: [ {
      text:   '22&23大厂招聘数据(部分)' },
    {subtext:'数据来源：公开资料整理',
  top:'5%'}],
    
      legend: {orient: 'vertical',
        x:"right",
      y:'top',
      padding:[0,50,0,0],
          data: [ '2022届','2023届', '减少',],
          show:true,}
          ,
    
    
      
    // legend: {
    //     data: ['2022届','2023届', '减少', ]
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'value'
    }],
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['字节跳动', '美团', '百度', '阿里', '腾讯', ]
    }],
    series: [
    {
            name: '2022届',
            type: 'bar',
            
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [8000, 10000, 8000, 5800, 7000]
        },
        {
            name: '2023届',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [3000, 5000, 2000, 2000,500]
        },
        {
            name: '减少',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data: [-5000, -5000, -6000, -3800, -6500]
        }
    ]
};


myChart33.setOption(option);






var myChart44 = echarts.init(document.getElementById('myBarChart4'));

// 指定图表的配置项和数据

var   yearData =[ 68826 ,  73125 ,  77198 ,  82851 ,  90359, 98899 ];
var   difference =[50.3,53.2,55.8,59.6,64.5,70.4]; 
option = {
    tooltip: {
      trigger: 'item',
      triggerOn:"mousemove",
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color:" blue",
          
        }
      }
      
    },
    title:  [{
        text:   '近五个季度我国互联网投融资情况' },
      {subtext:"数据来源：《中国互联网行业市场前景及投资机会研究报告》，",
    bottom:'5%'}],
    toolbox: {
      
    },
    legend: {x:"center",
    y:'bottom',
        data: [ '金额(亿美元)', '案例数'],
        show:true,
        selected: {
				    '金额(亿美元)' : true,
				    '案例数' : true,
				    //不想显示的都设置成false
				  },
    },
    xAxis: [
      {
        type: 'category',
        data: ['2021Q1', '2021Q2', '2021Q3', '2021Q4', '2022Q1'],
        
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '金额(亿美元)',
        min: 0,
        max: 160,
        interval: 20,
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        name: '案例数',
        min: 300,
        max: 800,
        interval: 100,
        axisLabel: {
          formatter: '{value} '
        }
      }
    ],
    series: [
     
      {
        name: '金额(亿美元)',
        type: 'bar',
        itemStyle:{
          normal:{
              color:'#4ad2ff'
          }
      },

        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        data: [ 84.6 ,  153.4 ,  156.5 ,  61.2 , 35.1 ]
      },
      {
        name: '案例数',
        type: 'line',
        itemStyle:{
          normal:{
              color:'green'
          }
      },

        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        label: {
          normal: {
              show: true,
              position: 'left'
          }
      },
        data: [783,599,548,518,335]
      },
      
    ]
  };



myChart44.setOption( option );


// -------图表5-----

var myChart55 = echarts.init(document.getElementById('myBarChart5'));

// 指定图表的配置项和数据


option = {
    tooltip: {
      trigger: 'item',
      triggerOn:"mousemove",
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color:" blue",
          
        }
      }
      
    },
    title:  [{
        text:   '腾讯营收&净利润(亿元)' ,
      left:'15%'},
      {subtext:'数据来源：腾讯2022Q3财报',
    left:'15%',
  top:'5%'}],
    toolbox: {
      
    },
    legend: {
      data: [ '营收', '净利润']
    },
    xAxis: [
      {
        type: 'category',
        data: ['2021Q3', '2022Q2'],
        
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '营收',
        min: 1300,
        max: 1400,
        interval: 10,
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        name: '利润',
        min: 100,
        max: 500,
        interval: 50,
        axisLabel: {
          formatter: '{value} '
        }
      }
    ],
    series: [
     
      {
        name: '营收(亿)',
        type: 'bar',
        itemStyle:{
          normal:{
              color:'purple'
          }
      },

        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        data: [ 1381,1340 ]
      },
      {
        name: '利润',
        type: 'line',
        itemStyle:{
          normal:{
              color:'red'
          }
      },

        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        label: {
          normal: {
              show: true,
              position: 'left'
          }
      },
        data: [422,186]
      },
      
    ]
  };



myChart55.setOption( option );

// -------图表6------
var myChart66 = echarts.init(document.getElementById('myBarChart6'));


var option = {
  title: [{
      text: '2021年Q1-2022年Q1互联网人才流向行业TOP1'
  },
{subtext:'数据来源：猎聘：2022年Q1中高端人才就业趋势大数据',top:'5%'},
],
  tooltip: {},
  
  legend: {
      data:['占比']
  },
  xAxis: {},
  yAxis: {
type:"category",
axisLabel: {  
  interval:3,  //让所有标签全部显示
  rotate:60  //让标签旋转一定的角度
} ,
data: ["互联网","计算机软件","教育/培训/学术/科研/院校","专业服务(咨询/财会/法律/翻译等)","房地产/工程","百货/批发/零售",'汽车/摩托车','交通/物流/运输','半导体/集成电路','食品/饮料/烟酒/日化']
},
  series: [{
      name: '占比（%）',
      type: 'bar',
      data: [49.0, 6.39, 3.57, 3.16, 2.92, 2.39,2.26,2.21,1.90,1.85],

      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: 'right', //在上方显示
            textStyle: { //数值样式
              color: 'black',
              fontSize: 16}}}}





  }]
};
myChart66.setOption( option );

// ------图表7-----
var myChart77 = echarts.init(document.getElementById('myBarChart7'));

var option = {
  title:[ {
    text: '2018年-2022年高校毕业生人数(万人)'},
    { subtext: "数据来源：国家统计局",
  left:'5%',
top:'5%'}
],
  xAxis: {
      type: 'category',
      data: ['2018', '2019', '2020', '2021', '2022']
  },
  yAxis: {
      type: 'value',
      show:true,
      
      
  },
  series: [{
      data: [821, 834, 874, 909, 1174],
      type: 'line',
      smooth: true, itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: 'right', //在上方显示
            textStyle: { //数值样式
              color: 'black',
              fontSize: 16}}}}

  }]
}

myChart77.setOption( option );

// --------图表8-----

var myChart88 = echarts.init(document.getElementById('myBarChart8'));
var option = { title:[ {
  text: '2011年-2022年GDP增速',
  left:'19%'
},
{subtext:'数据来源：国家统计局',
left:'20%',top:'5%'
}],
  color: ['#32E5FF'],
  tooltip: {
    trigger: 'axis'
  },
  grid: {
   
    left: '10%',
    right: '10%',

    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: [
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022'
    ],
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(20, 35, 87, 1)'
      }
    },
    boundaryGap: true, // 坐标两侧是否留白
    axisTick: {
      show: false  // 是否显示刻度线
    }
  },
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#FF44AA', // y 轴文字颜色
        formatter: '{value}  '
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#E6E6FA'  // y 轴轴线颜色
        }
      },
      splitLine: {
        lineStyle: {
          color: '#FFDEAD', //grid 区域中的分隔线颜色
          width: 1,
          type: 'solid'
        }
      }
    },
    {
      type: 'value',
      name: '(增长率)',
      position: 'left',
      alignTicks: true,
      nameGap: 8,
      axisLine: {
        show: false  // 是否显示 y 轴轴线
      },
      axisLabel: {
        formatter: '{value}'
      },
      nameTextStyle: {
        padding: [0, 10, 8, 0] // 单位位置
      }
    }
  ],
  series: [
    {
      type: 'line',
      name: '增速',
      data: ['9.5', '7.9', '7.8', '7.3', '6.9', '6.7', '6.9','6.6','6.1','2.3','8.1','5.5'],
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
        color: '#00DDAA',
        fontSize: '10px',
        fontFamily: 'ArialMT'
      },
      itemStyle: {
        color: '#FFE4E1', // 数据颜色
        gradientColorNum: 1
      },
      areaStyle: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.1,
              color: 'rgba(6, 252, 254, 0.1) ' // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: 'rgba(6, 252, 254, 0.5)' // 0% 处的颜色
            },
            {
              offset: 0.7,
              color: 'rgba(6, 252, 254, 0.3)' // 0% 处的颜色
            },
            {
              offset: 0.9,
              color: 'rgba(0,0,0, 0.1)' // 100% 处的颜色
            }
          ]
        }
      }
    }
  ]
};



myChart88.setOption( option );
// 对echarts进行自适应的优化 -------------

//根据窗口的大小变动图表 --- 重点
window.onresize = function(){
    myChart.resize();
    myChart1.resize();
    //myChart1.resize();若有多个图表变动，可多写
}