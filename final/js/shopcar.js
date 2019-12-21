//將變數名稱前面加上$字符號，以告訴自己該變數為JQuery物件
//JQuey物件才能使用JQuey支援的功能，例如.attr、.on()等
//標準JQuery語法：$(document).ready(函數名稱)，其中函數可以寫成：()=>{要做的事情}
//$+selector為標準的JQuey物件，EX:$('#main').on('click',()=>{要做的事情})

var loadNum = 0

//產生購物車商品函式
var ShopCar=(imgNum,price)=>
{
    var $img = $('<img>').attr('src', './HW2img/pack' + imgNum +'.jpg').addClass('shopimg')
    var $input = $('<input>').attr('type','number').attr('value','1').attr('min','0').attr('max','3')
    var $money = $('<p>'+'$'+price+'</p>').attr('style','color:red;').attr('value',price)
    var $cancel = $('<button>移出購物車</button>').addClass('shop').attr('id','cancelbutton')
    var $totalmoney = $('<p>'+'$'+price+'</p>').attr('style','color:red;').attr('value',price).addClass('totalmoney')

    var $tdimg = $('<td>') 
    var $tdmoney = $('<td>')
    var $tdcount = $('<td>')
    var $tdtotal = $('<td>')
    var $tdcancel = $('<td>')
    
    
    $tdmoney.append($money)
    $tdcount.append($input)
    $tdimg.append($img)
    $tdcancel.append($cancel)
    $tdtotal.append($totalmoney)

    var $tr = $('<tr>')
    $tr.append($tdimg).append($tdmoney).append($tdcount).append($tdtotal).append($tdcancel)
    
    $('#shopcar').append($tr)
    $('#compute').show()

    $($input).on('click', () => {
         let count = $input.val() //去抓input的值(value屬性)
         count = Number(count)
         let price = $money.attr('value')
         price = Number(price)
         price = price*count
         $totalmoney.attr('value',price) //修改商品價格
         $totalmoney.text('$'+price) //修改顯示的商品價格
    })

    $($cancel).on('click',()=>{
        $cancel.parent().parent().remove()
    })
}

/*隨機變數 */
var rand = (start, end) => {
    var r
    n = end - start + 1 //求亂數的範圍 
    r = Math.random() * n // 放大
    r = Math.floor(r) // 去除小數點
    r += start // 位移
    return r
}

//參考蝦皮的購物介面
//<input id="buy_count" type="number" min="1" max="500" maxlength="3" class="item-qty-input">

$(() => {


    /* 將商品加入購物車*/
    $('.DBMF').on('click', () => {
        ShopCar(1,700)
    })
    $('.EP19').on('click', () => {
        ShopCar(2,700)
    })
    $('.DBIC').on('click', () => {
        ShopCar(3,700)
    })
    $('.DP22').on('click', () => {
        ShopCar(4,680)
    })
    $('.DBHS').on('click', () => {
        ShopCar(5,700)
    })
    $('.SAST').on('click', () => {
        ShopCar(6,1450)
    }) 
    $('.SOFU').on('click', () => {
        ShopCar(7,1350)
    })
    $('.CHIM').on('click', () => {
        ShopCar(8,1450)
    })
    $('.DANE').on('click', () => {
        ShopCar(9,1350)
    })
    $('.RIRA').on('click', () => {
        ShopCar(10,1350)
    })
    $('.SD37').on('click', () => {
        ShopCar(11,700)
    })
    $('.20PP').on('click', () => {
        ShopCar(12,700)
    })
    $('.LVP3').on('click', () => {
        ShopCar(13,1000)
    })
    $('.LGB1').on('click', () => {
        ShopCar(14,2000)
    })
    $('.ETCO').on('click', () => {
        ShopCar(15,1450)
    })

    /* 結算購物車商品總價格 */
    $('#compute').on('click', () => {
        let totalPrice = $('.totalmoney').get() //抓取所有class為"totalmoney"的HTML element，並存成一個陣列
        //console.log(typeof(totalPrice))
        //console.log(totalPrice)
        var tp = 0
        for(let i = 0; i < totalPrice.length ; i++)
        {
            tp = tp + Number($(totalPrice[i]).attr('value'))
        }
        
        $('#TP').text('Total Price $' + tp).show()
    })

    /*產生更多商品*/
    $('.loadmore').on('click', () => {
        
        $('.loadmore').hide()
        $('#randProduct'+ loadNum).show()
        loadNum = loadNum + 1
    })

    
})