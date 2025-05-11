document.getElementById('order').addEventListener('click', (event) => {
    event.preventDefault(); // Запобігаємо стандартному відправленню форми

    const fullname = document.getElementById('Name_one').value;
    const phone = document.getElementById('phone_one').value;
    const city = document.getElementById('town_one').value;
    const color = document.getElementById('color-select').value;
    const size = document.getElementById('size-select').value;
    
    // Артикул задається вручну або динамічно залежно від вибраного товару
    const article = 'CUR_M873'; // Замініть на фактичний артикул

    // Перевірка на порожні поля
    if (!fullname || !phone || !city || !color || !size) {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    const message = `Доброго дня! Хочу зробити замовлення:\n\nІм'я: ${fullname}\nТелефон: ${phone}\nМісто: ${city}\nКолір: ${color}\nРозмір: ${size}\nАртикул: ${article}`;

    // Підготовка URL для відкриття чату в Messenger
    const messengerURL = `https://m.me/61559734116983?text=${encodeURIComponent(message)}`;

    // Перехід на сторінку Facebook Messenger
    window.location.href = messengerURL;

    // Відправка повідомлення в Telegram
    const botToken = '8194429089:AAGZst6Z6zr0IncIpx5v0K7U3LSWy7f_RjQ'; // Ваш токен бота
    const chatId = '5148446547'; // Ваш chat_id

    const tgMessage = `Користувач натиснув кнопку "Оформити замовлення".\n\nДані замовлення:\nІм'я: ${fullname}\nТелефон: ${phone}\nМісто: ${city}\nКолір: ${color}\nРозмір: ${size}\nАртикул: ${article}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(tgMessage)}`)
        .then(response => response.json())
        .then(data => {
            console.log('Відповідь Telegram:', data);
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
});

document.getElementById('order').addEventListener('click', () => {
    const botToken = '7904638293:AAETP3wx3iqUb5bS9ZMLqIdoSdzh6PtuEVU';
    const chatId = '5148446547';
    const message = 'Користувач натиснув кнопку "Підтвердити Замовлення в Messenger"';

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
      .then(response => response.json())
      .then(data => {
        console.log('Відповідь Telegram:', data);
      })
      .catch(error => {
        console.error('Помилка:', error);
      });
  });