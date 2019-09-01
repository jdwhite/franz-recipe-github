"use strict";

module.exports = Franz => {
  const getMessages = () => {
    //var element = document.querySelector('[aria-label="You have unread notifications"]');
    var element = document.querySelector('span[class="mail-status unread"]');
    const direct = 0;
    var indirect = 0;
    console.log("element="+element);

    if (element !== null) {
      console.log("element !== null; indirect should be 1");
      indirect = 1;
    }
    console.log("indirect="+indirect);

    Franz.setBadge(direct,indirect);
  };

  Franz.loop(getMessages);
};
