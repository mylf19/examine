var option1 = {
 	 tooltip: {
 		        trigger: 'axis',
 		        position: function (pt) {
 		            return [pt[0], '10%'];
 		        }
//                formatter:function(params){
//                	 console.log(params);
//                	//return params[0].name+'<br/'
//                }
},
    legend: {
        data:['RSRQ','RSRP','SINR'],
        left: 80
             },
    grid: {
            left: 60,
             right: 60,
            bottom: 60,
            //containLabel: true
           },
       toolbox: {
               feature: {
                   dataZoom: {
                         yAxisIndex: 'none'
                             },
                   restore: {},
                   saveAsImage: {}
                 },
                left:330
             },

    xAxis :
       {
           type:'category',
           boundaryGap : false,
           data : ['0','0','0','0','0','0','0']
       },

     yAxis : [
              {
                name:'dBm',
                position:'left',
                type: 'value'
                },
         {
        	name:'db',
        	position:'right',
            type: 'value'
        },
       
        {
            type: 'value',
            name: 'PCI',
            position:'right',
            //y轴的刻度根据数值变化
            min:'dataMin',
            max:'dataMax',
            //相对于默认y轴的位移
            offset: 30,
            //控制小数刻度不显示
            axisLabel:{
            	formatter:function(value){
            		if (value-parseInt(value)==0){
            			return value;
            		                             }
            		
            	                         }
            },

            axisLine: {
            	lineStyle: {
                    color: 'purple'
                           }
                      }
        }
 ],
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series : [
        {
            name:'RSRQ',
            type:'line',
            yAxisIndex:1,
            data:[0, 0, 0, 0,0, 0,0]
        },
        {
            name:'RSRP',
            type:'line',
            data:[0, 0, 0,0, 0, 0,0]
        },
        {
            name:'SINR',
            type:'line',
            yAxisIndex:1,
            data:[0, 0, 0, 0,0, 0, 0]
        },
        {
            name:'PCI',
            type:'line',
            step:'start',
//            color:'purple',
            itemStyle:{
                normal:{color:'purple'}
            },
            yAxisIndex:2,
            data:[0, 0, 0, 0,0, 0, 0]
        }
]
};

var option={
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
//    title: {
//        left: 'center',
//        text: '大数据量面积图',
//    },
    legend: {
        data:['RSRQ','RSRP','SINR']
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0','0','0','0','0','0','0']
    },
    yAxis:  [
             {
             	name:'dBm',
                 type: 'value'
             },
             {
             	name:'dB',
                 type: 'value'
             }
             
         ],
         dataZoom: [{
             type: 'inside',
             start: 0,
             end: 10
         }, {
             start: 0,
             end: 10,
             handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
             handleSize: '80%',
             handleStyle: {
                 color: '#fff',
                 shadowBlur: 3,
                 shadowColor: 'rgba(0, 0, 0, 0.6)',
                 shadowOffsetX: 2,
                 shadowOffsetY: 2
             }
         }],
    series : [
              {
                  name:'RSRQ',
                  type:'line',
                  yAxisIndex:1,
                  
                  data:[0, 0, 0, 0,0, 0,0]
              },
              {
                  name:'RSRP',
                  type:'line',
       
                  data:[0, 0, 0,0, 0, 0,0]
              },
              {
                  name:'SINR',
                  type:'line',
                  yAxisIndex:1,
                 
                  data:[0, 0, 0, 0,0, 0, 0]
              }
            
          ]
};
var optionEF1={
	    tooltip: {
	        trigger: 'axis'
	    },
	    toolbox: {
	        feature: {
	            dataView: {show: true, readOnly: false},
	            magicType: {show: true, type: ['line', 'bar']},
	            restore: {show: true},
	            saveAsImage: {show: true}
	        }
	    },
	    legend: {
	        data: ['发生次数'],
	        },
	    grid:{
	        left: 0,
	        top :0,
	        right: 0,
	        bottom: 0,
	        containLabel:true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: ['弱覆盖','越区重叠','乒乓切换','导频污染'],
	        	axisLabel:{  
                interval:0,  
                rotate:0,//倾斜度 -90 至 90 默认为0  
                margin:20,  
               
            },    
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	          
	            min: 0,
	            max: 5,
	            interval: 1,
	            axisLabel: {
	                formatter: '{value} 次'
	            }
	        }

	    ],
	    series: [
	        {
	            name:'发生次数',
	            type:'bar',
	            itemStyle: {
	                        normal: {
	                           
	                            color: function (value){ 
	                                
	                         var colorList = ['#C1232B','#B5C334','#FCCE10','#E87C25',,'#A87C25' ];
	                        return colorList[value.dataIndex]
	                            }
	                        }
	                    },
	            data:[2, 1, 0,3,1]
	        }
	      
	    ]
	};
var optionEF={
    /*title : {
        text: '南丁格尔玫瑰图',
     
        x:'left'
    },*/
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
      
        data:['弱覆盖','越区覆盖','乒乓切换']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
       
        {
            name:'面积模式',
            type:'pie',
            radius : [0, 100],
            center : ['50%', '60%'],
//            roseType : 'area',
            data:[
             
                {value:1, name:'弱覆盖'},
                {value:1, name:'越区覆盖'},
                {value:3, name:'乒乓切换'},
               
            ]
        }
    ]
};
var duijioption={
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    legend: {
        data: ['模三干扰', '弱覆盖','越区覆盖','乒乓切换']
    },
    grid: {
        left: '1%',
        right: '2%',
        bottom: '1%',
        containLabel: true
    },
    xAxis:  {
    	
        type: 'value',
        min: 0,
        max: 3,
        interval: 1,
    },
    yAxis: {
        type: 'category',
        data: ['西柏坡-定州西','定州西-肃宁北','肃宁北-黎民居','黎民居-黄骅港'],
    	axisLabel:{  
            interval:0,  
           // rotate:45,//倾斜度 -90 至 90 默认为0  
            margin:20,  
          
        },    
    },
    series: [
        {
            name: '模三干扰',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1,0,0,1]
        },
        {
            name: '弱覆盖',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1,0,0,0]
        },
        {
            name: '越区覆盖',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [0,1,0,0]
        },
        {
            name: '乒乓切换',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [0,0,0,2]
        },
        
    ]
};
var optionRatio = {
	    /*title: {
	        text: '世界人口总量',
	        subtext: '数据来自网络'
	    },*/
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['比率']
	    },
	   grid: {
	        left: '5%',
	        right: '5%',
	        bottom: '5%',
	        containLabel: true
	    },
	    yAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01],
	        min:60,
	        axisLabel:{  
	            interval:0,  
	            rotate:0,//倾斜度 -90 至 90 默认为0  
	            margin:20,  
	        },    
	    },
	    xAxis: {
	        type: 'category',
	        data: ['PING成功率','切换成功率','ATTACH接入成功率'],
	        axisLabel:{  
	            interval:0,  
	            //rotate:45,//倾斜度 -90 至 90 默认为0  
	            margin:20,  
	          
	        },   
	    },
	    series: [
	        {
	            name: '比率',
	            type: 'bar',
	            data: [ 98, 95, 99],
	             itemStyle: {
		                        normal: {
		                           
		                            color: function (value){ 
		                                
		                         var colorList = ['#B5C334','#FCCE10','#E87C25' ];
		                        return colorList[value.dataIndex]
		                            }
		                        }
		                    },
	        },
	     
	    ]
	};
var optionRatio1 = {
	    /*title: {
	        text: '世界人口总量',
	        subtext: '数据来自网络'
	    },*/
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['比率']
	    },
	   grid: {
	        left: '5%',
	        right: '5%',
	        bottom: '5%',
	        containLabel: true
	    },
	    yAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01],
	        min:60,
	        axisLabel:{  
	            interval:0,  
	            rotate:0,//倾斜度 -90 至 90 默认为0  
	            margin:20,  
	        },    
	    },
	    xAxis: {
	        type: 'category',
	        data: ['RSRP覆盖率','PING成功率','切换成功率','ATTACH接入成功率'],
	        axisLabel:{  
	            interval:0,  
	            //rotate:45,//倾斜度 -90 至 90 默认为0  
	            margin:20,  
	          
	        },   
	    },
	    series: [
	        {
	            name: '比率',
	            type: 'bar',
	            data: [97, 98, 95, 99],
	             itemStyle: {
		                        normal: {
		                           
		                            color: function (value){ 
		                                
		                         var colorList = ['#C1232B','#B5C334','#FCCE10','#E87C25' ];
		                        return colorList[value.dataIndex]
		                            }
		                        }
		                    },
	        },
	     
	    ]
	};
