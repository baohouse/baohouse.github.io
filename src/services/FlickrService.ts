/**
 * We use jQuery for AJAX calls because it doesn't generate an OPTIONS
 * preflight request, whereas using the flickr-sdk, which uses
 * superagent, does trigger an OPTIONS request. Sadly, Flickr API
 * doesn't support CORS.
 *
 * We'll want to convert all jQuery Deferred into native Promise.
 */
import $ from "jquery";

import Flickr from "models/Flickr";

const FLICKR_API_URL = "https://api.flickr.com/services/rest/";

export default class FlickrService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * @return Photo[]
   */
  public async getInterestingnessList(): Promise<Flickr.Photo[]> {
    const photos = await $.getJSON(FLICKR_API_URL, {
      api_key: this.apiKey,
      extras: "url_c,url_h",
      format: "json",
      method: "flickr.interestingness.getList",
      nojsoncallback: 1,
      per_page: 500,
    })
    .then(
      (response) => response.photos.photo.filter(
        (photo: Flickr.Photo) => photo.ispublic,
      ),
    );

    return photos;
  }
}
