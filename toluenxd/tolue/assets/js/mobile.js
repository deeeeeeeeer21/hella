/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
) &&
  (setTimeout(function () {
    alert(
      "This site is not optimized for mobile devices. Please use a desktop computer to view this site."
    );
  }, 2e3),
  (document.getElementById("navbar").style.display = "none"),
  (document.getElementById("burger").style.display = "none"));
