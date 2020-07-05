// URLデコード
$('#decode').on('click', function() {
  try {
    let decoded = $('#decoded');
    decoded.val(decodeURI($('#encoded').val()));
    console.log(decoded[0]);
//    window.getSelection().selectAllChildren(decoded[0]);
//    document.execCommand('copy');
  } catch (e) {
    console.error(e);
  }
});

// URLエンコード
$('#encode').on('click', function() {
  try {
    let encoded = $('#encoded');
    encoded.val(encodeURI($('#decoded').val()));
    console.log(encoded[0]);
//    window.getSelection().selectAllChildren(encoded[0]);
//    document.execCommand('copy');
  } catch (e) {
    console.error(e);
  }
});

// 変換ヘッダー部クリック
$('#header-1').on('click', function() {
  let header = $(this);
  let content = header.next();
  content.slideToggle(250, function() {
    header.text(function() {
      return content.is(':visible') ? '▲ 変換' : '▼ 変換';
    });
  });
});

// 検索ヘッダー部クリック
$('#header-2').on('click', function() {
  let header = $(this);
  let content = header.next();
  content.slideToggle(250, function() {
    header.text(function() {
      return content.is(':visible') ? '▲ 検索' : '▼ 検索';
    });
  });
});
