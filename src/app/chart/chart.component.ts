import { Component, OnInit, Input } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { NgModule } from '@angular/core';

import { Colors } from './colors';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomLineTypes } from './lineTypes';
import { Months } from './months';



@NgModule({
imports: [FormsModule,ReactiveFormsModule ]

})

export class AppModule { }


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    @Input() chart:Chart

    customColors:Colors[]
    customLineTypes: CustomLineTypes[]

    customMonths:Months[]

    selectedValue:Number
    selectedValueType:Number

    leftBorder:Number
    rightBorder:Number

    myChart

  constructor() { }

  chartData = {
    "dataSet1" : Array.from({ length: 12 }, () => Math.floor(Math.random() * 590) + 10),
    "dataSet2" : Array.from({ length: 12 }, () => Math.floor(Math.random() * 690) + 10),
    "dataSet3" : Array.from({ length: 12 }, () => Math.floor(Math.random() * 790) + 10),
    "dataSet4" : Array.from({ length: 12 }, () => Math.floor(Math.random() * 890) + 10)
  };
    
  ngOnInit(): void {
    this.customColors = [
        {
            id: 0,
            colorName: 'red',
            colorValue: 'rgba(255, 99, 132, 0.4)'
        },
        {
            id: 1,
            colorName: 'green',
            colorValue: 'rgba(99, 255, 132, 0.4)'
        },
        {
            id: 2,
            colorName: 'blue',
            colorValue: 'rgba(82, 59, 255, 0.4)'
        }
    ]

    this.customLineTypes = [
        {
          id: 0,
          lineName: 'line',
          lineType: 'line'
        },
        {
          id: 1,
          lineName: 'bar',
          lineType: 'bar'
        },
        {
          id: 2,
          lineName: 'bubble',
          lineType: 'bubble'
        }
    ]

    this.customMonths = [
      {id: 0, name: "January"},
      {id: 1, name: "February"},
      {id: 2, name: "March"},
      {id: 3, name: "April"},
      {id: 4, name: "May"},
      {id: 5, name: "June"},
      {id: 6, name: "July"},
      {id: 7, name: "August"},
      {id: 8, name: "September"},
      {id: 9, name: "October"},
      {id: 10, name: "November"},
      {id: 11, name: "December"}
    ]

    
    this.selectedValue = 0;
    this.selectedValueType;
    this.leftBorder = 0;
    this.rightBorder = 11;
    console.log("myChart" + this.chart.id);
    var canvas : any = document.getElementsByClassName("myChart")[this.chart.id];
    var ctx = canvas.getContext("2d");
    this.myChart = new Chart(ctx, {
    //type: 'bar',
    type: this.chart.type,
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Months',
            data: this.chartData.dataSet1,
            backgroundColor: [
              this.chart.color
            ],
            borderColor: [
              this.chart.color
            ],
            pointBorderColor: [
              this.chart.color
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                } 
            }]
        }
    }
});
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  updateChartData(chart, data, dataSetIndex) {
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
  }

  getMonthIndexByName(monthName) {
    console.log(monthName)
    for(var index in this.customMonths)
    { 
        if (this.customMonths[index].id == monthName) {
            return this.customMonths[index].id;
        }
    }
  }

  applyFilter(){
    this.myChart.data.datasets[this.chart.id].data = this.chartData.dataSet1;
    this.myChart.data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].slice(this.getMonthIndexByName(this.leftBorder), this.getMonthIndexByName(this.rightBorder) + 1);
    this.myChart.update();
  }

  applyDateFilter(){
    this.myChart.data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].slice(parseInt('January'), parseInt('February') + 1);
    this.myChart.update();
  }

  getChoosedColor(selectedIndex) {
    for(var index in this.customColors)
    { 
        console.log(this.customColors[index]);
        if (this.customColors[index].id == selectedIndex) {
            return this.customColors[index].colorValue;
        }
    }
  }

  getChoosedLineType(selectedIndex) {
    for(var index in this.customLineTypes)
    { 
        console.log(this.customLineTypes[index]);
        if (this.customLineTypes[index].id == selectedIndex) {
            return this.customLineTypes[index].lineType;
        }
    }
  }

  applySettings() {
    this.myChart.data.datasets[0].backgroundColor = this.getChoosedColor(this.selectedValue);
    this.myChart.data.datasets[0].type = this.getChoosedLineType(this.selectedValueType);

    this.myChart.update();
  }


}
