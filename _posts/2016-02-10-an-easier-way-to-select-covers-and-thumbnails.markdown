---
title: An easier way to set collection covers and item thumbnails
date: 2016-02-10 18:15:00 Z
Field name: test
test: asdfasdf
---

![2014-01-04 14.03.27.jpg](/uploads/2014-01-04%2014.03.27.jpg)

You've been able to change a collection's cover image and an item's thumbnail for awhile, but until now you were restricted to manually uploading your own image. Today we're improving this functionality. Now, when you go to edit the thumbnail of a link you've saved, we'll **extract** any `images` from that website and offer them as thumbnail options. We already do our best to [intelligently](http://example.com) set a thumbnail for links you save, but hey, the internet is a big place and we can't cover every edge case, so we're giving you more control over what thumbnail is used for your saved items.

# Example

    getDefaultProps() {
        var mode = Cookies.get('md_mode') ? Cookies.get('md_mode') : 'markdown';
    
        return {
          initialMode: mode
        };
      },
    
      getInitialState() {
        return {
          mode: this.props.initialMode
        };
      },

![monkey.jpg](/uploads/monkey.jpg)

You can find the option to change your collection's cover image or an item's thumbnail in the new "quick options" dropdown. Expand it by clicking the ellipsis (...) button that displays when you hover over a collection or item.