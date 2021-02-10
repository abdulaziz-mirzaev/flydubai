<template>
  <div class="content">
    <div class="intro-y box mt-8">
      <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
        <h2 class="font-medium text-base mr-auto">
          Создать заказ
        </h2>
      </div>
      <div class="p-5" id="input">
        <div class="preview">
          <div>
            <label>
              Номер счета
              <input type="number" class="input w-full border mt-2" placeholder="Номер счета">
            </label>
          </div>
          <div class="mt-3">
            <label>
              Тип
              <input type="text" class="input w-full border mt-2" placeholder="Тип">
            </label>
          </div>
          <div class="mt-3">
            <label>
              Тип (id) <br>
              <select class="input border mt-2">
                <option>Тип (id)</option>
                <option>Liam Neeson</option>
                <option>Daniel Craig</option>
              </select>
            </label>
          </div>
          <div class="mt-2">
            <label>
              Оператор <br>
              <select class="input border mt-2">
                <option>Оператор</option>
                <option>Liam Neeson</option>
                <option>Daniel Craig</option>
              </select>
            </label>
          </div>
          <div class="mt-2">
            <label>
              Карта <br>
              <select class="input border mt-2">
                <option>Карта</option>
                <option>Liam Neeson</option>
                <option>Daniel Craig</option>
              </select>
            </label>
          </div>
          <div class="mt-3">
            <label>
              Количество
              <input type="number" class="input w-full border mt-2" placeholder="Количество">
            </label>
          </div>
          <div class="mt-3">
            <label>
              Сумма
              <input type="number" class="input w-full border mt-2" placeholder="Сумма">
            </label>
          </div>
          <div class="mt-3">
            <label>
              Сумма с карты
              <input type="number" class="input w-full border mt-2" placeholder="Сумма с карты">
            </label>
          </div>
          <div class="mt-3">
            <label>
              НДС
              <input type="number" class="input w-full border mt-2" placeholder="НДС">
            </label>
          </div>
          <div class="mt-3">
            <label>
              Способ оплаты <br>
              <select class="input border mt-2">
                <option>Способ оплаты</option>
                <option>Liam Neeson</option>
                <option>Daniel Craig</option>
              </select>
            </label>
          </div>
          <div class="mt-3">
            <label>
              Статус <br>
              <select class="input border mt-2">
                <option>Статус</option>
                <option>Liam Neeson</option>
                <option>Daniel Craig</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
};
</script>

<style scoped></style>
