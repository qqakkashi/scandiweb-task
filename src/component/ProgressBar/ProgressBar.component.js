import React, { PureComponent } from "react";
import "./ProgressBar.styled";

export default class ProgressBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      proccedSteps: [],
      currentStep: "",
    };
  }
  addStep(step) {
    this.setState({
      proccedSteps: step,
    });
  }
  componentDidMount() {
    const allSteps = Object.keys(this.props.data.steps);

    this.setState({
      proccedSteps: [...this.state?.proccedSteps, allSteps?.[0]],
    });
    console.log(allSteps[0]);
  }
  render() {
    const allSteps = Object.keys(this.props.data.steps);
    console.log(this.state?.proccedSteps);
    return (
      <div block="Checkout" elem="ProgressBar">
        {allSteps.map((step, index) => {
          if (index === allSteps.length - 1) {
            return (
              <div
                style={{ height: 5, backgroundColor: "black", width: "33%" }}
              ></div>
            );
          } else {
            if (this.state?.proccedSteps.some((item) => item === step)) {
              return (
                <>
                  <div
                    style={{ height: 5, backgroundColor: "red", width: "33%" }}
                  ></div>
                  <p>
                    {
                      this.props.data.steps[this.props.data.position].title
                        .value
                    }
                    ++
                  </p>
                </>
              );
            } else if (this.props.data.position === step) {
              return (
                <>
                  <div
                    style={{ height: 5, backgroundColor: "red", width: "33%" }}
                  ></div>
                  <p>
                    {
                      this.props.data.steps[this.props.data.position].title
                        .value
                    }
                  </p>
                </>
              );
            } else {
              <>
                <div
                  style={{ height: 5, backgroundColor: "black", width: "33%" }}
                ></div>

                <p>no</p>
              </>;
            }
          }
        })}
      </div>
    );
  }
}
