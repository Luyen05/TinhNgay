function calculateAge() {
      let dob = document.getElementById("dob").value;
      if (!dob) {
        alert("Hãy nhập ngày sinh!");
        return;
      }

      let birthDate = new Date(dob);
      let today = new Date();

      // Tính số năm, tháng, ngày
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      // Tính tổng số ngày đã qua
      let diffTime = today - birthDate;
      let totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      document.getElementById("result").innerHTML =
        `Bạn đã trải qua! <br>
        ${totalDays.toLocaleString()} ngày <br>
        ${years} năm <br> ${months} tháng <br> ${days} ngày`;
    }