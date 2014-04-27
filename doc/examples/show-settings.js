function show_dydra_settings() {
  var connection_info = '';
  if (typeof DYDRA_ACCOUNT === 'undefined') {
    connection_info += '<h1>Oops, no settings!</h1>';
    connection_info += '<p>Copy settings.example.js to settings.js, which is gitignored.';
    connection_info += ' Enter your settings in it and refresh this page.</p>';
  }
  else {
    connection_info += 'You are connecting as user <b>' + DYDRA_ACCOUNT + '</b>';
    connection_info += ' with the token <b>' + DYDRA_TOKEN + '</b>';
    connection_info += ' to repository <b>' + DYDRA_REPOSITORY + '</b>';
  }
  $('.settings').html(connection_info);
}
show_dydra_settings();
