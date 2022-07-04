//Success handler
var successHandler = function(purchaseAction){
    //alert("Masaki Purchase completed successfully.");
	document.getElementById('UnityEmbed').postMessage("ChromeHandler.PurchaseStat("+purchaseAction.request.name+")");
}

//Failure handler
var failureHandler = function(purchaseActionError){
    //alert("Masaki Purchase did not complete.");
	document.getElementById('UnityEmbed').postMessage("ChromeHandler.PurchaseStat(FAILED)");
}

function Purchase( code ){
   goog.payments.inapp.buy({
       'jwt'     : String(code),
       'success' : successHandler,
       'failure' : failureHandler
  });
}

function purchaseTest(){
   goog.payments.inapp.buy({
       'jwt'     : "eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJhdWQiOiAiR29vZ2xlIiwgImlzcyI6ICIxNTIyOTczMTMzNDU5NzgxNTEzMiIsICJyZXF1ZXN0IjogeyJjdXJyZW5jeUNvZGUiOiAiVVNEIiwgInByaWNlIjogIjQ5OSIsICJzZWxsZXJEYXRhIjogIntcInBpZFwiOiBcImZ1bGxnYW1lXCIsIFwiZW1haWxcIjogXCJsc2dtYXNhQGdtYWlsLmNvbVwifSIsICJuYW1lIjogIlNsZWVweSBKYWNrIEZ1bGwgR2FtZSIsICJkZXNjcmlwdGlvbiI6ICJVbmxvY2sgYWxsIGxldmVscyBvZiBTbGVlcHkgSmFjayEhISJ9LCAiZXhwIjogMTMyMzY0MzkwMCwgImlhdCI6IDEzMjM1NTc1MDAsICJ0eXAiOiAiZ29vZ2xlL3BheW1lbnRzL2luYXBwL2l0ZW0vdjEifQ.u7VPXlaY-cXGi1saxPN_qvIsUMWvyOqtfZdxlveh3_E",
       'success' : successHandler,
       'failure' : failureHandler
  });
}

 




