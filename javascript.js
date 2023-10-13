let slider = document.getElementsByClassName("slider")[0]
let buttons = document.getElementsByClassName("buttons")[0]
let counter = 0
let data = [
    `
    <div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>фронтендер</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>апи разработчик</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>дизайнер</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>разраб</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>апи разработчик</p>
</div>
    `,
    `
    <div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>клиент</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>заведующий</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>директор</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>экополист</p>
</div>
<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>апи разработчик</p>
</div>
    `
    ,
    `
    <div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>монополист</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>иетрополист</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>школьник</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>athvth</p>
</div>

<div class="card">
    <img src="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F2f5571f4-d270-4f58-94d8-e039daf7dc9f%2Fd64kxfi-5d61d0ac-7d84-4637-9bb6-08f8db0da659.jpg%2Fv1%2Ffill%2Fw_898%2Ch_871%2Cq_75%2Cstrp%2Fphotoshop_cc__june_2013__logo_by_balochdesign_d64kxfi-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvMmY1NTcxZjQtZDI3MC00ZjU4LTk0ZDgtZTAzOWRhZjdkYzlmXC9kNjRreGZpLTVkNjFkMGFjLTdkODQtNDYzNy05YmI2LTA4ZjhkYjBkYTY1OS5qcGciLCJ3aWR0aCI6Ijw9ODk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FXYDzeG9NYIxgDKLIKSGcbmmfxf8xzypmn8vZWQQVfo&lr=48&pos=4&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF" alt="">
    <h2>Bvz</h2>
    <p>повар</p>
</div>
    `
]
function moveSlider(dir) {
    buttons.style.pointerEvents="none"
    slider.style.transition = "1s"
    if (dir == 'right') {
        slider.style.transform = "translateX(calc(-100% / 3 * 2))"
        counter++
    }
    else {
        slider.style.transform = "translateX(0)"
        counter--
        if(counter<0){
            counter=2
        }
    }
    setTimeout(() => {
        slider.style.transition = "0s"
        buttons.style.pointerEvents="auto"
        slider.style.transform = "translateX(calc(-100% / 3))"
        for(let i = 0; i<3; i++){
            let slide = document.getElementsByClassName("slide")[i]
            slide.innerHTML=data[(i+counter)%3]
        }
    }, 1000)
}

