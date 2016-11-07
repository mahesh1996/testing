function process()
			{
				
				if(document.getElementById("bin").checked)
				{
					handle_bin();
				}
				else if(document.getElementById("dec").checked)
				{
					handle_dec();
				}
				else if(document.getElementById("hex").checked)
				{
					handle_hex();
				}
				else if(document.getElementById("oct").checked)
				{
					handle_oct();
				}
			}
			function handle_bin()
			{
				var x;
				  x = converttodec(2,1);
				if(document.getElementById("opdec").checked)
				{
					var y ;
					y = converttodec(10,2);
				}
				else if(document.getElementById("ophex").checked)
				{
					var y ;
					y = converttodec(16,2);
				}
				else if(document.getElementById("opoct").checked)
				{
					var y ;
					y = converttodec(8,2);
				}
				else if(document.getElementById("opbin").checked)
				{
					var y ;
					y = converttodec(2,2);
				}
				output(x,y);
			}
			function handle_dec()
			{
				
				var x ;
				x = converttodec(10,1);
				if(document.getElementById("opdec").checked)
				{
					var y ;
					y = converttodec(10,2);
				}
				else if(document.getElementById("ophex").checked)
				{
					var y ;
					y = converttodec(16,2);
				}
				else if(document.getElementById("opoct").checked)
				{
					var y ;
					y = converttodec(8,2);
				}
				else if(document.getElementById("opbin").checked)
				{
					var y ;
					y = converttodec(2,2);
				}
				output(x,y);
			}
			
			function handle_hex()
			{
				
				var x = converttodec(16,1);
				if(document.getElementById("opdec").checked)
				{
					var y ;
					y = converttodec(10,2);
				}
				else if(document.getElementById("ophex").checked)
				{
					var y ;
					y = converttodec(16,2);
				}
				else if(document.getElementById("opoct").checked)
				{
					var y ;
					y = converttodec(8,2);
				}
				else if(document.getElementById("opbin").checked)
				{
					var y ;
					y = converttodec(2,2);
				}
				output(x,y);
			}
			
			function handle_oct()
			{
				var x ;
				x = converttodec(8,1);
				if(document.getElementById("opdec").checked)
				{
					var y ;
					y = converttodec(10,2);
				}
				else if(document.getElementById("ophex").checked)
				{
					var y ;
					y = converttodec(16,2);
				}
				else if(document.getElementById("opoct").checked)
				{
					var y;
					y = converttodec(8,2);
				}
				else if(document.getElementById("opbin").checked)
				{
					var y ;
					y = converttodec(2,2);
				}
				output(x,y);
			}
			
			function converttobin(r,option)
			{
				if(option==1)
					var no = document.getElementById("box1");
				else if(option==2)
					var no = document.getElementById("box2");
				var y = parseInt(no.value,r);
				var z = y.toString(2);
				return z;
			}
			function converttodec(r,option)
			{
				if(option==1)
					var no = document.getElementById("box1");
				else if(option==2)
					var no = document.getElementById("box2");
				var y = parseInt(no.value,r);
				var z = y.toString(10);
				return z;
			}
			function converttohex(r,option)
			{
				if(option==1)
					var no = document.getElementById("box1");
				else if(option==2)
					var no = document.getElementById("box2");
				var y = parseInt(no.value,r);
				var z = y.toString(16);
				return z;
			}
			function converttooct(r,option)
			{
				if(option==1)
					var no = document.getElementById("box1");
				else if(option==2)
					var no = document.getElementById("box2");
				var y = parseInt(no.value,r);
				var z = y.toString(8);
				return z;
			}
			function output(x,y)
			{
				var a = parseInt(x);
				var b = parseInt(y);
				var z;
				if(document.getElementById("add").checked)
					z =a+b;
				else if(document.getElementById("sub").checked)
					z = a-b;
				else if(document.getElementById("mul").checked)
					z = a*b;
				else if(document.getElementById("div").checked)
					z = a/b;
				if(document.getElementById("fdec").checked)
				{
					var fans = document.getElementById("ans");
					fans.innerHTML = z;
				}
				else if(document.getElementById("fhex").checked)
				{
					var ans = z.toString(16);
					var fans = document.getElementById("ans");
					fans.innerHTML = ans;
				}
				else if(document.getElementById("foct").checked)
				{
					var ans = z.toString(8);
					var fans = document.getElementById("ans");
					fans.innerHTML = ans;
				}
				else if(document.getElementById("fbin").checked)
				{
					var ans = z.toString(2);
					var fans = document.getElementById("ans");
					fans.innerHTML = ans;
				}
			}
			function clr()
			{
				var fans = document.getElementById("ans");
				var b1 = document.getElementById("box1");
				var b2 = document.getElementById("box2");
				fans.innerHTML = "";
				b1.value = "";
				b2.value = "";
			}