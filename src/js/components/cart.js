export const cart = () => {
  //Отображение кол-во товаров
  const itemsList = document.querySelector(".cart__shopping-list");
  const itemsValue = document.querySelector(".cart__shopping-span");

  const itemsLength = function () {
    if (itemsList && itemsValue) {
      const itemsChild = itemsList.children;
      itemsValue.innerHTML = itemsChild.length;
      if (itemsChild.length === 0) {
        itemsValue.innerHTML = "Empty";
      }
    }
  };

  itemsLength();
  //Отображение кол-во товаров

  //Тотал Прайс
  function calcCartPrice() {
    const cartItems = document.querySelectorAll(".cart__shopping-item");
    let totalPrice = 0;

    cartItems.forEach(function (item) {
      const amoutVat = document.querySelector(".cart__summary-price");
      const amountEl = item.querySelector("[data-counter]");
      const priceEl = item.querySelector(".cart__span-value");
      const totalEl = document.querySelector(".cart__summary-span");

      const currentPrice =
        parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

      totalPrice += currentPrice;

      totalEl.innerText = totalPrice;

      amoutVat.innerText = totalPrice * 1.2;
    });
  }

  calcCartPrice();

  const wrapper = document.querySelector(".cart__shopping-list");
  if (wrapper) {
    wrapper.addEventListener("click", (event) => {
      const target = event.target;
      let counter;

      //Удаление товара
      const deleteEl = function () {
        const deleteButton = event.target.closest(".cart__shopping-delete");
        if (!deleteButton) {
          return;
        }

        deleteButton.parentElement.remove();
        itemsLength();
      };

      deleteEl();
      //Удаление товара

      if (
        target.dataset.action === "plus" ||
        target.dataset.action === "minus"
      ) {
        //Находим обертку счетчика
        const counterWrapper = target.closest(".cart__shopping-counter");
        //Находим див с числом счетчика
        counter = counterWrapper.querySelector("[data-counter]");
      }

      //Проверяем является ли элемент по которому мы кликнули плюс
      if (target.dataset.action === "plus") {
        counter.innerText = ++counter.innerText;
      }

      //Проверяем является ли элемент по которому мы кликнули минус
      if (target.dataset.action === "minus") {
        //Проверяем чтоб счетсик был больше 1
        if (parseInt(counter.innerText) > 1) {
          //Изменяем текст в счетчике уменьшая его на 1
          counter.innerText = --counter.innerText;
        }
      }
      calcCartPrice();
    });
  }
};
