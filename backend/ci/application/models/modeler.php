<?php
class Modeler extends CI_Model {

	public function getU($data){
		$query = $this->db->query("SELECT * FROM users WHERE username ='".$data->users->username."' AND password ='".$data->users->password."'");
		$res = $query->result();

		return $res;
	}

}

?>