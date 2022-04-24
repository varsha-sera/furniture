import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmiService } from '../services/emi.service';
import { UserService } from '../services/user.service';

declare var Razorpay: any;
@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css'],
})
export class CheckoutpageComponent implements OnInit {
  constructor(
    private emiService: EmiService,
    private router: Router,
    private serve: UserService,
  ) {}

  orderplaced(
    mobile: any,
    address: any,
    email: any,
    quantity: any,
    amount: any,
    emi: any
  ) {
    this.emiService
      .placeOrder(mobile, address, email, quantity, amount, emi, this.productId)
      .subscribe((data) => {
        window.alert('Order Placed');
      });
  }

  cartItem: any = localStorage.getItem('item-list');
  totalProducts!: number;
  totalPrice: number = 0;
  productId: any = [];
  i = 0;
  k = 0;
  user:any;
  ngOnInit(): void {

    this.cartItem = JSON.parse(this.cartItem);
    for (let item of this.cartItem) {
      this.totalProducts = ++this.i;
      this.totalPrice = item.pPrice * item.pro_qty + this.totalPrice;
      this.productId[this.k++] = item._id;
    }
    
  }

  open(value: any) {
    if (value == 'EMI') this.router.navigate(['/emi']);
    else if (value == 'Online') console.log('Online');
    else console.log('CASH');
  }

  onPay() {
    this.serve.createOrder(2000).subscribe((data) => {

    var options = {
      key: 'rzp_test_QoaC9eX0D7fVFo', // Enter the Key ID generated from the Dashboard
      amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Acme Corp',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response: {
        razorpay_payment_id: any;
        razorpay_order_id: any;
        razorpay_signature: any;
      }) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        console.log(response);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on(
      'payment.failed',
      function (response: {
        error: {
          code: any;
          description: any;
          source: any;
          step: any;
          reason: any;
          metadata: { order_id: any; payment_id: any };
        };
      }) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      }
    );
    rzp1.open();
    // e.preventDefault();
    });
  }
}
