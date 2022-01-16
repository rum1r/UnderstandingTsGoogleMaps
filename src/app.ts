const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  // イベントに対するデフォルトの動作をキャンセルする
  event.preventDefault();
  const enterdAddress = addressInput.value;

  // Google API に送信
}

form.addEventListener('submit', searchAddressHandler);