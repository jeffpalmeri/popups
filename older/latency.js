function trackerPixel() {
  window.loaded = false;
  const sTrack = (window.safariAmpt = function strack() {
    sTrack.track
      ? sTrack.track.apply(sTrack, arguments)
      : sTrack.queue && sTrack.queue.push([arguments[0], arguments[1]]);
  });
  const atrack = (window.atrack = function atrk(j, q) {
    sTrack(j, q);
  });
  const aqueue = (window.aqueue = function aq() {
    if (!window.loaded) {
      sTrack.queue && sTrack.queue.push([arguments[0], arguments[1]]);
    }
  });
}
​
trackerPixel();
​
window.tracker = async (el, url) => {
	let start = window.performance.now();
	console.time('trackerLoaded');
  const bElement = document.createElement(el);
  bElement.async = !0;
  bElement.src = url;
  bElement.setAttribute('type', 'text/javascript');
  const cTag = await document.getElementsByTagName(el)[0];
  if (!cTag) {
    firePixelTracker();
    return;
  }
  cTag.parentNode.insertBefore(bElement, cTag);
  const isUTMContentLoad = document.createEvent('Event');
  isUTMContentLoad.initEvent('isUTMContentLoad', true, true);
​
  bElement.onload = function onload() {
    try {
      safariAmpt.init('a8ef6c54-dc6a-47c1-a3e8-993c9eff1c9c');
​
      const waitForTracker = () => {
        setTimeout(() => {
          if (window.safariAmpt.pid && window.safariAmpt.uid) {
          	let end = window.performance.now();
          	console.timeEnd('trackerLoaded');
          	let time = end - start;
          	document.getElementsByClassName('time')[0].innerText = time.toFixed(2);
            window.isTrackerLoad = true;
            window.hasUTMContentLoad = true;
            window.dispatchEvent(isUTMContentLoad);
            
          } else {
            waitForTracker();
          }
        }, 200);
      };
      waitForTracker();
    } catch (err) {
      console.warn('safariAmpt has been disabled');
      window.hasUTMContentLoad = false;
      window.isTrackerLoad = false;
    }
  };
​
  // tracker is blocked by adsblocker or similar.
  bElement.onerror = function onerror() {
    window.isTrackerLoad = false;
  };
}
​
window.experimenterApi = () => {
	let start = window.performance.now();
	console.time('expLoaded');
  return fetch('https://experimenter.ampush.net/experimenter?partner_id=0ea95d1c-a4ca-4894-aec5-bffd368024c4&funnel_step=bundle&_nocache=1&_debug=1')
    .then((response) => {
    	return response.json()
    })
    .then((data) => {
    	this.result = JSON.parse(data.variant_url);
      let end = window.performance.now();
    	console.timeEnd('expLoaded');
    	let time = end - start;
    	document.getElementsByClassName('time-exp')[0].innerText = time.toFixed(2);
    })
    .catch((err) => {
      console.warn(err);
    });
};