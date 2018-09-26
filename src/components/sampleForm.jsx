import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class SampleForm extends Form {
  state = {
    data: { name: "", number: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    number: Joi.number()
      .required()
      .integer()
      .label("Number")
  };

  doSubmit = () => {
    const { data } = this.state;
    this.props.onSubmit(data);
  };

  render() {
    return (
      <div className="text-center">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("number", "Number")}
          {this.renderButton("Add")}
        </form>
        <hr />
        <div className="card border-0">
          <img
            className="card-img-top rounded-circle"
            alt=""
            src="https://instagram.fkwi6-1.fna.fbcdn.net/vp/f43787b0aa202c2874235c378533c4f0/5C2DF847/t51.2885-15/sh0.08/e35/s640x640/37380811_375788839615100_3445787132696723456_n.jpg"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SampleForm;

// <img alt="يبيله" class="FFVAD" decoding="auto" sizes="293px" srcset="https://instagram.fkwi6-1.fna.fbcdn.net/vp/99f118e3fcf4d95ab0fbad36a4894301/5C60DAE0/t51.2885-15/e35/s150x150/37380811_375788839615100_3445787132696723456_n.jpg 150w,https://instagram.fkwi6-1.fna.fbcdn.net/vp/b9bfce797822ed96983c44ca47afce2f/5C22F0AA/t51.2885-15/e35/s240x240/37380811_375788839615100_3445787132696723456_n.jpg 240w,https://instagram.fkwi6-1.fna.fbcdn.net/vp/adff8cf9dcc0ed7715a9d512208036d5/5C248E10/t51.2885-15/e35/s320x320/37380811_375788839615100_3445787132696723456_n.jpg 320w,https://instagram.fkwi6-1.fna.fbcdn.net/vp/28eceffc9f4c497a119d2e02ad214f72/5C60654A/t51.2885-15/e35/s480x480/37380811_375788839615100_3445787132696723456_n.jpg 480w,https://instagram.fkwi6-1.fna.fbcdn.net/vp/f43787b0aa202c2874235c378533c4f0/5C2DF847/t51.2885-15/sh0.08/e35/s640x640/37380811_375788839615100_3445787132696723456_n.jpg 640w" src="" style="">
