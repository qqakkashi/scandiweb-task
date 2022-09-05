import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "Component/ContentWrapper";
import ProgressBar from "Component/ProgressBar";

class Checkout extends SourceCheckout {
  renderProgress() {
    console.log(this.stepMap);
    console.log(this.props.checkoutStep);
    const { checkoutStep } = this.props;
    return (
      <ProgressBar
        data={{ position: this.props.checkoutStep, steps: this.stepMap }}
      />
    );
  }
  render() {
    return (
      <main block="Checkout">
        {this.renderProgress()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}
export default Checkout;
