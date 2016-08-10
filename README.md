# Jquery Filepicker from Google Drive

Pick one or multi files from Google Drive.

## Why?

This project makes easier the use of Google Drive Filepicker.

## Installation

```bash
$ bower install google-drive-filepicker
```

## Usage

#### Pick one file

```html
<button class="pick">Pick files</button>

<script src="https://www.google.com/jsapi?key=[APIKEY]"></script>
<script src="https://apis.google.com/js/client.js?onload=initGdriveFilePicker"></script>
<script src="../dist/js/jquery.gdrive-filepicker.min.js" type="text/javascript"></script>
<script type="text/javascript">
    var apiKey   = '[API_KEY]',
        clientId = '[CLIENT_ID]'
    
    function initGdriveFilePicker() {
      $('.pick').gdriveFilePicker({
        apiKey: apiKey,
        clientId: clientId,
        features: [],
        onPicked: downloadFile
      });
    }
    
    function downloadFile(file, callback) {
      if (file) {
        console.log(file)
      }
    }
</script>
```

#### Pick multiple files

```html
<button class="pick">Pick a file</button>

<script src="https://www.google.com/jsapi?key=[APIKEY]"></script>
<script src="https://apis.google.com/js/client.js?onload=initGdriveFilePicker"></script>
<script src="../dist/js/jquery.gdrive-filepicker.min.js" type="text/javascript"></script>
<script type="text/javascript">
    var apiKey   = '[API_KEY]',
        clientId = '[CLIENT_ID]'
    
    function initGdriveFilePicker() {
      $('.pick').gdriveFilePicker({
        apiKey: apiKey,
        clientId: clientId,
        features: ['google.picker.Feature.MULTISELECT_ENABLED'],
        onPicked: downloadFile
      });
    }
    
    function downloadFile(file, callback) {
      if (file) {
        console.log(file)
      }
    }
</script>
```

#### Default options
```javascript
defaults = {
  apiKey: null,
  clientId: null,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  features: ['google.picker.Feature.MULTISELECT_ENABLED'],
  views: ['google.picker.ViewId.DOCUMENTS'],
  onPicked: null
}
```

## Instructions for development
```
npm install
```

```
bower install
```

```
grunt
```

## Contributing

See the [CONTRIBUTING](CONTRIBUTING.md) file.

## License

The project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
