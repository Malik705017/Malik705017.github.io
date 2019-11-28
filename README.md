# Malik705017 個人履歷網頁設計說明與未來規劃

歡迎，這是修習108-1前端程式設計的第四次作業所做的履歷網頁。
這次網頁所套用的是colorlib的模板：https://colorlib.com/wp/template/revive/ 我自己是蠻喜歡這種有carousel功能的網頁所以就選擇了這個template。

## 各個section簡要說明：

### About Me
這個部分的呈現方式參考了學長的about me section的code，換言之就是套用相同的內容格式，因為覺得學長這樣的列表清晰易懂、一目瞭然。而我也是在做這個section的時候開始思考有哪些內容是可以放在網頁中的，像是活動經驗的部份因為過去參加的活動不多，所以改以學習心得方式來呈現(Major Section)，以後可以把學習筆記也一同丟到github上來變成一種紀錄。

### Major
這個部分就是想紀錄自己幾個比較重要的學習心得，像是困擾我很久的演算法，以及過去學的資料結構跟每到寒暑假我會額外自學的python。
呈現的方式則是用我很喜歡的bootstrap中的card deck component，裡面的縮圖則是自己在canva上設計的，另外在底下加了read more，以後做好文章的頁面後就會讓read more連結過去。

### Interest
基於多使用component的考量，這個部分嘗試使用media component，縮圖一樣都是用canva設計。內容包含兩個我過去在網路上經營的東西，一個是臉書粉專，一個是在wordpress弄的部落格，且是購買了網域的。

### Project
這個部分本來想要再做一些圖片的方式呈現，但考量到過去做的project不多，大二這學期倒是有很多project要做，所以先暫時用list的方式列幾個大一做過的專題。
等大二上做完管理學、統計學、組織行為、前端的project之後再弄一個圖片表格的方式來實現吧！

### Footer
做footer的時候我在想許多部落客的footer都會放文章的分類(尤其是沒有側邊欄的時候)，所以我就思考以後自己的blog可能會長什麼樣子、會有什麼內容。因此footer其實是我在about me之後就開始做的section，也大致上確定要將網頁做成有「程式心得」跟「程式以外的紀事」。

## 備註
一開始其實不太懂什麼是響應式網頁，後來google後才知道響應式網頁是現在因應智慧型手機成為瀏覽網站主要工具而衍生出來的網站趨勢，能根據載具的不同改變網頁呈現的方式，尤其是圖片大小的縮放、介面佈局跟排版方式。在Bootstrap大致瀏覽一番後知道它有一個fliud的class可以讓圖片跟文字變成響應式，就套用上去了。

