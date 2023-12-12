import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Home.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useLayoutEffect } from "react";
am4core.useTheme(am4themes_animated);

function Home() {
  const initLineChart = () => {
    let chart = am4core.create("linechartdiv", am4charts.XYChart);

    chart.data = [
      {
        year: "2014",
        income: 23.5,
        expenses: 21.1,
      },
      {
        year: "2015",
        income: 26.2,
        expenses: 30.5,
      },
      {
        year: "2016",
        income: 30.1,
        expenses: 34.9,
      },
      {
        year: "2017",
        income: 20.5,
        expenses: 23.1,
      },
      {
        year: "2018",
        income: 30.6,
        expenses: 28.2,
      },
      {
        year: "2019",
        income: 34.1,
        expenses: 31.9,
      },
      {
        year: "2020",
        income: 34.1,
        expenses: 31.9,
      },
      {
        year: "2021",
        income: 34.1,
        expenses: 31.9,
      },
      {
        year: "2023",
        income: 34.1,
        expenses: 31.9,
      },
      {
        year: "2023",
        income: 34.1,
        expenses: 31.9,
      },
      {
        year: "2024",
        income: 34.1,
        expenses: 31.9,
      },
    ];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "year";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;

    var valueAxis: any = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "year";
    lineSeries.dataFields.valueY = "income";
    lineSeries.tooltipText = "income: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "lineColor";
    lineSeries.propertyFields.fill = "lineColor";

    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 6;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;
    return chart;
  };

  const initBarChart = () => {
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("barchartdiv", am4charts.XYChart);

    chart.data = [
      {
        country: "JAN",
        visits: 3025,
      },
      {
        country: "FEB",
        visits: 1882,
      },
      {
        country: "MAR",
        visits: 1809,
      },
      {
        country: "APR",
        visits: 1322,
      },
      {
        country: "MAY",
        visits: 1122,
      },
      {
        country: "JUN",
        visits: 1114,
      },
      {
        country: "JULY",
        visits: 984,
      },
      {
        country: "AUG",
        visits: 711,
      },
      {
        country: "SEPT",
        visits: 665,
      },
      {
        country: "OCT",
        visits: 580,
      },
      {
        country: "NOV",
        visits: 443,
      },
      {
        country: "DEC",
        visits: 441,
      },
    ];

    const categoryAxis: any = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 10;

    const series: any = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    var hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (
      fill: any,
      target: any
    ) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.XYCursor();
    return chart;
  };

  useLayoutEffect(() => {
    const lineChart = initLineChart();
    const barChart = initBarChart();

    return () => {
      lineChart.dispose();
      barChart.dispose();
    };
  }, []);

  return (
    <MDBContainer className="mt-5">
      <section className="px-md-5 px-sm-2 m-0 p-2">
        <div className="row">
          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="d-flex flex-column text-start justify-content-between">
                    <p className="">Total Flats</p>
                    <h3>120</h3>
                  </div>

                  <div className="align-self-top">
                    <MDBBadge className="badge-icon" color="danger" pill>
                      <i className="fas fa-building text-white fa-3x"></i>
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="d-flex flex-column text-start justify-content-between">
                    <p className="">Total Flats Occupied</p>
                    <h3>95</h3>
                  </div>

                  <div className="align-self-top">
                    <MDBBadge className="badge-home-icon" color="primary" pill>
                      <i className="fas fa-home text-white fa-3x"></i>
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="d-flex flex-column text-start justify-content-between">
                    <p className="">Total Flats Vacent</p>
                    <h3>25</h3>
                  </div>

                  <div className="align-self-top">
                    <MDBBadge className="badge-home-icon" color="success" pill>
                      <i className="fas fa-home text-white fa-3x"></i>
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-md-5 px-sm-2 m-0 p-2">
        <div className="row">
          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="d-flex flex-column text-start justify-content-between">
                    <p className="">
                      Total Current Bill <h3>₹9000</h3>
                    </p>
                    <p className="">
                      Miscellaneous Charges <h3>₹6000</h3>
                    </p>
                  </div>

                  <div className="align-self-top">
                    <MDBBadge className="badge-home-icon" color="info" pill>
                      <i className="fas fa-business-time text-white fa-3x"></i>
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="d-flex flex-column text-start justify-content-between">
                    <p className="">
                      Watchman Wages <h3>₹25,000</h3>
                    </p>
                    <p className="">
                      Maintenance Expenses <h3>₹15,000</h3>
                    </p>
                  </div>

                  <div className="align-self-top">
                    <MDBBadge className="badge-home-icon" color="info" pill>
                      <i className="fas fa-business-time text-white fa-3x"></i>
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-4 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="d-flex flex-column text-start justify-content-between">
                    <p className="">
                      Total Amount <h3>₹45,000</h3>
                    </p>
                    <p className="">
                      Total Maintenance Amount <h3>₹20,000</h3>
                    </p>
                  </div>

                  <div className="align-self-top">
                    <MDBBadge className="badge-home-icon" color="info" pill>
                      <i className="fas fa-business-time text-white fa-3x"></i>
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-md-5 px-sm-2 m-0 p-2">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <label className="fw-bold mb-2">
                  Maintenance Cost per Flat
                </label>
                <div id="barchartdiv"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <label className="fw-bold mb-2">
                  Toatal Maintenance Received
                </label>
                <div id="linechartdiv"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-md-5 px-sm-2 m-0 p-2">
        <div className="shadow-4 rounded-5 table-responsive mb-5">
          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th>Maintanance For</th>
                <th>Net Amount</th>
                <th>Amount Per Flat</th>
                <th>Created</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ verticalAlign: "middle" }}>
              <tr>
                <td>
                  <p className="fw-normal mb-1">Security Salerys</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹80,000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹1000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">01/12/2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">
                    Periodic Building Maintenance
                  </p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹1,00,000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹2000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">02/12/2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">
                    Common Area & Parking Utilization
                  </p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹10,000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹500</p>
                </td>
                <td>
                  <p className="text-muted mb-0">03/12/2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">
                    Garden & Parking Area Maintenance
                  </p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹10,000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹500</p>
                </td>
                <td>
                  <p className="text-muted mb-0">03/12/2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">Temple Maintenance</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹30,000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹5000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">05/12/2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fw-normal mb-1">Sports Hall Maintenance</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹10,000</p>
                </td>
                <td>
                  <p className="text-muted mb-0">₹500</p>
                </td>
                <td>
                  <p className="text-muted mb-0">05/12/2023</p>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </section>
    </MDBContainer>
  );
}

export default Home;
