"use strict";

module.exports = Franz => {
  const getMessages = () => {
    var element = document.querySelector('[aria-label="You have unread notifications"]');
    var hasUnread = 0;
	//console.log(element);

    if (element !== null) {
      hasUnread = 1;
    }

    Franz.setBadge(0, hasUnread);
  };

  Franz.loop(getMessages);

};