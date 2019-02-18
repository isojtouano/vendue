<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index(){	
		//headers na iset para ma authorized ang Angular frontend na musend ug data
		header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
		header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		header("Access-Control-Allow-Origin: *");
		header('Content-Type: application/json');
	
		//this line expects the data that's passed from the Angular and sends that data to $data1
		//this also decodes what's sent (json type) from angular
		$data1 = json_decode(file_get_contents("php://input"));
		
		//load the model that contains the function you wanna integrate/call
		$this->load->model('modeler');

		//calls the function test() and passes the data returned to $res
		$res = $this->modeler->getU($data1);

		//encoding $res into an array so it can be sent as a parameter
		$data = array(
			'res' => $res
		);
		
		$data2 = array(
					'username' => 'ritsu',
					'password' => 'kawai',
					'type' => 'admin',
					'img' => 'ritsu.jpg'
			);

		$this->db->insert('users', $data2);
		//loads the view para ma basa as response sa angular
		$this->load->view('welcome_message', $data);
	}

	// public function insert(){
	// 		$data = array(
	// 				'username' => 'ritsu',
	// 				'password' => 'kawai',
	// 				'type' => 'admin',
	// 				'img' => 'ritsu.jpg'
	// 		)
	// }

}
