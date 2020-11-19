import { ForbiddenLandsItemSheet } from "./item.js";

export class ForbiddenLandsGearSheet extends ForbiddenLandsItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/forbidden-lands/model/gear.html",
    });
  }
}
