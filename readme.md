<pre>
   ______                     __    ______
  / __/ /__ ____  ___ ___ ___/ /__ / / __/
 / _// / _ `/ _ \(_-</ -_) _  // // /\ \  
/___/_/\_,_/ .__/___/\__/\_,_(_)___/___/  
          /_/                             
</pre>

Elapsed.JS
==========

## What
A pure JavaScript x-time Ago plugin.
Converts UTC timestamps to pretty Date-Time strings, that updated in __Realtime__.
Pure JavaScript implies that no other plugin is required, not even the jQuery.

## Why
Typical use cases includes News Feeds and Timelines, where feeds are fetched once. If the User Decides to stay on the page, the Time Agos, fetched from server becomes inaccurate as the time passes.

## How
### Getting Started Quickly:
    // Prepare HTML:
    <span class="elapsedJS" data-elapsepS="1410365332"></span>
    // Include the distribution file.
    <script type="text/javascript" src="elapsed.min.js"></script>
    // Start the Elapsed.JS sub-routine:
    Elapsed.init();
    // That's it!
### Detailed Usage:
1. Create any number of span classes, but be sure to add "elapsedJS" as one of the class. Example:
        <span class="elapsedJS"></span>
2. Add UTC time since epoch, in Seconds, to HTML5 standard data container. Example:
        <span class="elapsedJS" time-elapseJS = "Integers"></span>
3. Include the Distribution file.
4. Execute on your page by calling:
        <script>Elapsed.init();</script>
5. Debug can be enabled by providing ElapsedDEBUG a truth value.